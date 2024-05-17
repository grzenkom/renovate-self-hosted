import numpy as np
from hello_numpy import get_random_array

def test_get_random_array():
    expected_length = 10
    actual_array = get_random_array(expected_length)

    assert isinstance(actual_array, np.ndarray)
    assert len(actual_array) == expected_length
