import platform

def test_python_version():
    major, minor, _ = platform.python_version_tuple()
    assert int(major) == 3
    assert int(minor) < 12, 'Python 3.12 is not supported yet'
