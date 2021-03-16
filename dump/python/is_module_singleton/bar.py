import pprint

config = None


def set_config(config_param):
    global config
    config = config_param


def connect():
    global config
    print(pprint.pformat(config))