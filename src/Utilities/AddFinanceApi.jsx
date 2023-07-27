import { supabase } from "../supabase/Supabase";
import { GetRoomIdFromName } from "./GetRoomIdFromName";

export const AddFinanceApi = async (amount, room, user, setSubpage) => {
    const room_id = await GetRoomIdFromName(room);
    const { data, error } = await supabase.from("spending").insert({
        room_id: room_id,
        amount: amount,
        user_id: user.current.id,
    });
    
    if (error) {
        console.error(error);
        return;
    }
    setSubpage("myfinances");
    return data;
};
