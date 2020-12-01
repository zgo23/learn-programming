import logging
import logging.handlers
import multiprocessing

from random import choice, random
import time
import utils


def listener_configurer():
    root = logging.getLogger()
    log_file_path = f"{utils.get_logs_directory()}/multiprocessing_logging_1.log"
    h = logging.handlers.RotatingFileHandler(log_file_path, "a", 300, 10)
    f = logging.Formatter(
        "%(asctime)s %(processName)-10s %(name)s %(levelname)-8s %(message)s"
    )
    h.setFormatter(f)
    root.addHandler(h)


def listener_process(queue, configurer):
    configurer()
    while True:
        try:
            record = queue.get()
            if record is None:
                break
            logger = logging.getLogger(record.name)
            logger.handle(record)
        except Exception:
            import sys, traceback

            print("Whoops! Problem:", file=sys.stderr)
            traceback.print_exec(file=sys.stderr)


LEVELS = [logging.DEBUG, logging.INFO, logging.WARNING, logging.ERROR, logging.CRITICAL]
LOGGERS = ["a.b.c", "d.e.f"]
MESSAGES = ["Random message #1", "Random message #2", "Random message #3"]


def worker_configurer(queue):
    h = logging.handlers.QueueHandler(queue)
    root = logging.getLogger()
    root.addHandler(h)
    root.setLevel(logging.DEBUG)


def worker_process(queue, configuer):
    configuer(queue)
    name = multiprocessing.current_process().name
    print("Worker started: %s" % name)
    for i in range(10):
        time.sleep(random())
        logger = logging.getLogger(choice(LOGGERS))
        level = choice(LEVELS)
        message = choice(MESSAGES)
        logger.log(level, message)
    print("Worker finished: %s" % name)


def main():
    queue = multiprocessing.Queue(-1)
    listener = multiprocessing.Process(
        target=listener_process, args=(queue, listener_configurer)
    )
    listener.start()
    workers = []
    for i in range(10):
        worker = multiprocessing.Process(
            target=worker_process, args=(queue, worker_configurer)
        )
        workers.append(worker)
        worker.start()
    for w in workers:
        w.join()
    queue.put_nowait(None)
    listener.join()


if __name__ == "__main__":
    main()
