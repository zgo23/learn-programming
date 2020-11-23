import multiprocessing, time


def foo(i):
    print("called function in process: %s" % i)
    time.sleep(2)
    return


if __name__ == "__main__":
    Process_jobs = []
    for i in range(5):
        p = multiprocessing.Process(target=foo, args=(i,))
        Process_jobs.append(p)
        p.start()
        print(p.pid)
        p.join()