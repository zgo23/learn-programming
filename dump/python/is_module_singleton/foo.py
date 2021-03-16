import bar, baz


def main():
    bar.set_config({"host": "192.168.0.1", "port": 8000})
    baz.do_something()


if __name__ == "__main__":
    main()