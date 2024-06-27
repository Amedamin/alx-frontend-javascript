import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const RoomS = [19, 20, 34];
  return RoomS.map(size => new ClassRoom(size));
}
