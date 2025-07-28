// external modules
// ...

// internal modules
import { Heartbeat } from "./heartbeat.model";

class HeartbeatService {
    heartbeat() {
        return Date.now()
    }
}

export const heartbeatService = new HeartbeatService();