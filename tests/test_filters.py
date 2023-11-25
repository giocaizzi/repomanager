import pytest
from repomanager.filters import icon_filter


def test_icon_filter_with_iterable():
    # Test when value is an iterable (list)
    value = [1, 2, 3]
    assert icon_filter(value) == value


def test_icon_filter_with_non_iterable():
    # Test when value is not an iterable
    value = "example"
    assert icon_filter(value) == value


def test_icon_filter_with_collection():
    # Test when collection is passed
    value = "example"
    collection = "custom"
    assert icon_filter(value, collection) == value


def test_icon_filter_with_collection_and_existing_value():
    # Test when collection is passed and value exists in ICONS
    value = "example"
    collection = "defaults"
    assert icon_filter(value, collection) == value


def test_icon_filter_with_collection_and_non_existing_value():
    # Test when collection is passed and value does not exist in ICONS
    value = "non_existing"
    collection = "custom"
    assert icon_filter(value, collection) == value


def test_icon_filter_without_collection_and_existing_value():
    # Test when collection is not passed and value exists in ICONS["defaults"]
    value = "example"
    assert icon_filter(value) == value


def test_icon_filter_without_collection_and_non_existing_value():
    # Test when collection is not passed and value does not exist in ICONS["defaults"]
    value = "non_existing"
    assert icon_filter(value) == value
