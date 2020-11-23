import time, random, sys, signal, os
from multiprocessing import Pool


def initializer():
    signal.signal(signal.SIGINT, signal.SIG_IGN)


def foo(*args):
    print("Process {} is created.".format(os.getpid()))
    seconds = random.randint(3, 6)
    time.sleep(seconds)

    number = args[0]

    if number % 2 == 0:
        raise RuntimeError("Even number is not supported")

    return number * number


def wrapper(*args):
    try:
        return foo(*args)
    except Exception as e:
        return e


def main():
    pool = Pool(initializer=initializer)
    numbers = [2, 3, 7, 9, 8, 11, 15]

    try:
        for value in pool.imap(wrapper, numbers, 2):
            print(value, ", type: ", type(value))
    except KeyboardInterrupt:
        print("Caught KeyboardInterrupt, terminating workers")
        pool.terminate()
        pool.join()
    else:
        print("Quitting normally")
        pool.close()
        pool.join()


if __name__ == "__main__":
    main()
