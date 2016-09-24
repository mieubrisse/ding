package com.strangegrotto.taskdungeon.player;

import com.codahale.metrics.annotation.Timed;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/player")
@Produces(MediaType.APPLICATION_JSON)
public interface PlayerService {
    public static final String ENDPOINT__GET_STATUS = "status";

    public static final String PATH_PARAM_PLAYER_ID = "playerId";

    @GET
    @Timed
    @Path("/" + ENDPOINT__GET_STATUS + "/{" + PATH_PARAM_PLAYER_ID + "}")
    PlayerStatus getStatus(@PathParam(PATH_PARAM_PLAYER_ID) String playerId);
}
