import multiprocessing, time


def foo():
    print("foo starts")
    time.sleep(5)
    print("foo ends")


if __name__ == "__main__":
    p = multiprocessing.Process(target=foo)
    p.start()
    p.join()
    print("done")
