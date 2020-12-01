import logging, os

current_directory = os.path.dirname(__file__)

logging.basicConfig(
    level=logging.DEBUG,
    filename=f"{current_directory}/app.log",
    filemode="w",
    # format="%(name)d - %(levelname)s - %(message)s",
    # format="%(process)d - %(levelname)s - %(message)s",
    format="%(asctime)s - %(name)s - %(message)s",
    datefmt="%d-%b-%y %H:%M:%S",
)

logging.debug("This is a debug message.")
logging.info("This is an info message.")
logging.warning("This is a warning message.")
logging.error("This is an error message.")
logging.critical("This is a critical message.")

name = "John"
logging.error("%s raised an error", name)
logging.error(f"{name} raised an error")

a = 5
b = 0

try:
    c = a / b
except Exception as e:
    # logging.error("Exception occurred", exc_info=True)
    logging.exception("Exception occurred.")

logger = logging.getLogger("example_logger")
logger.warning("This is a warning")

logger = logging.getLogger(__name__)
logger.info("This is a logger for main.")

c_handler = logging.StreamHandler()
f_handler = logging.FileHandler(f"{current_directory}/file.log")
c_handler.setLevel(logging.WARNING)
f_handler.setLevel(logging.ERROR)
c_format = logging.Formatter("%(name)s - %(levelname)s - %(message)s")
f_format = logging.Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
c_handler.setFormatter(c_format)
f_handler.setFormatter(f_format)

logger.addHandler(c_handler)
logger.addHandler(f_handler)

logger.warning("This is a warning")
logger.error("This is an error")
