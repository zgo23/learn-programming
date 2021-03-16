import multiprocessing as mp

ctx = mp.get_context()


class MyProcess(ctx.Process):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        print("Hi, I'm a custom process")


ctx.Process = MyProcess


def worker(x):
    print(x ** 2)


def main():
    p = ctx.Pool(4)
    nums = range(10)
    p.map(worker, nums)


if __name__ == "__main__":
    main()