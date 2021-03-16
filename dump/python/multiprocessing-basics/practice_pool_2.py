import multiprocessing, os
from multiprocessing.util import Finalize

from selenium import webdriver
from selenium.webdriver.chrome.options import Options

driver_manager = None


class DriverManager:
    def __init__(self):
        pass

    def __enter__(self):
        chrome_options = Options()
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.maximize_window()
        return self.driver

    def __exit__(self, *args, **kwargs):
        self.driver.quit()


def _worker_init():
    global driver_manager
    driver_manager = DriverManager()
    driver_manager.__enter__()
    Finalize(driver_manager, driver_manager.__exit__, exitpriority=16)


def hi(*args):
    driver_manager.driver.get("http://www.skykiwi.com")


if __name__ == "__main__":
    pool = multiprocessing.Pool(initializer=_worker_init)
    pool.map(hi, range(pool._processes))
    # pool.close()
    pool.terminate()
    pool.join()

    # with multiprocessing.Pool(initializer=_worker_init) as pool:
    #     pool.map(hi, range(pool._processes))
    # pool.close()
    # pool.join()
