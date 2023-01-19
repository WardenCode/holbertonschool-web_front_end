const roomDimensions = {
  width: 50,
  length: 100,
  getArea: () => width * length
};

boundGetArea = roomDimensions.getArea.bind(roomDimensions);
