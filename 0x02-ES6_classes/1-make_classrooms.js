import ClassRoom from './0-classroom';

function initializeRooms() {
  const R1 = new ClassRoom(19);
  const R2 = new ClassRoom(20);
  const R3 = new ClassRoom(34);

  return [R1, R2, R3];
}

export default initializeRooms;
