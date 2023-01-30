package com.a608.modac.service;

import java.util.List;

import com.a608.modac.model.room.RoomRequest;
import com.a608.modac.model.room.RoomResponse;

public interface RoomService {
	RoomResponse findRoomById(final Long seq);
	List<RoomResponse> findAllRooms();
	RoomResponse createRoom(final RoomRequest roomRequest);
	RoomResponse updateRoom(final Long seq, final RoomRequest roomRequest);
	void deleteRoom(final Long seq);
}