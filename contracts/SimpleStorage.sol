// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract SimpleStorage {
  uint storedData;

  event SetValue(uint value);

  function set(uint x) public {
    storedData = x;
    emit SetValue(x);
  }

  function get() public view returns (uint) {
    return storedData;
  }
}