import logging, os

current_directory = os.path.dirname(__file__)

logging.basicConfig(filename=f"{current_directory}/example.log", level=logging.DEBUG)
logging.debug("This message should go to the log file")
logging.info("So should this")
logging.warning("And this, too")
logging.error("And non-ASCII stuff, too, like Øresund and Malmö")
