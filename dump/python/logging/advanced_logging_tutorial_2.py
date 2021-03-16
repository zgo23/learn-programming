import logging
import logging.config
import os

log_file_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "logging.conf")

logging.config.fileConfig(log_file_path)

logger = logging.getLogger("simpleExample")

logger.debug("debug message")
logger.info("info message")
logger.warning("warn message")
logger.error("error message")
logger.critical("critical message")