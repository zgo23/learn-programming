from multiprocessing import Pool
from os import getpid, cpu_count


class FakeDriver:
    def __init__(self, pid):
        self.pid = pid

    def execute(self, num):
        return num * 2 if self.pid % 2 == 0 else num * num


driver = None


def initializer():
    global driver
    driver = FakeDriver(getpid())


def foo(num):
    value = driver.execute(num)
    return value


def main():
    with Pool(initializer=initializer) as pool:
        print(pool.map(foo, range(10)))


if __name__ == "__main__":
    main()