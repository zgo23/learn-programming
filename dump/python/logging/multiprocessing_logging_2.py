import logging
import logging.handlers
import multiprocessing
from time import sleep
from random import random, randint
from utils import get_logs_directory


def listener_configurer():
    """Whether this configuration can come from a configuration file?"""
    root = logging.getLogger()
    log_file_path = f"{get_logs_directory()}/multiprocessing_logging_2.log"
    file_handler = logging.handlers.RotatingFileHandler(log_file_path, "a", 300, 10)
    console_handler = logging.StreamHandler()
    formatter = logging.Formatter(
        "%(asctime)s %(processName)-10s %(name)s %(levelname)-8s %(message)s"
    )
    file_handler.setFormatter(formatter)
    console_handler.setFormatter(formatter)
    root.addHandler(file_handler)
    root.addHandler(console_handler)
    root.setLevel(logging.DEBUG)


def listener_process(queue):
    listener_configurer()
    while True:
        while not queue.empty():
            record = queue.get()
            logger = logging.getLogger(record.name)
            logger.handle(record)
        sleep(1)


def worker_configurer(queue):
    h = logging.handlers.QueueHandler(queue)
    root = logging.getLogger()
    root.addHandler(h)
    root.setLevel(logging.DEBUG)


def worker_process(queue):
    worker_configurer(queue)
    for i in range(3):
        sleep(random())
        innerLogger = logging.getLogger("worker")
        innerLogger.info(f"Logging a random number {randint(0, 10)}")


def main():
    queue = multiprocessing.Queue(-1)

    worker_configurer(queue)
    main_logger = logging.getLogger("main")

    listener = multiprocessing.Process(target=listener_process, args=(queue,))
    listener.start()

    main_logger.info("Logging from main")

    workers = []
    for i in range(3):
        worker = multiprocessing.Process(target=worker_process, args=(queue,))
        workers.append(worker)
        worker.start()
    for w in workers:
        w.join()

    main_logger.info("main function ends")


if __name__ == "__main__":
    main()
