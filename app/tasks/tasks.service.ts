// external modules
// ...

// internal modules
import { defaultFetchAPIRequest } from "@/utils/helpers/actions"
import { App } from "@/config/application"

class TasksService {
    /* 
     * Send an api request to start or stop time tracker on a specific task on a team
     *
     */
    async handleTimeTracker(taskID: string, action: any) {
        const endpoint = `https://api.clickup.com/api/v2/team/${App.teamID}/time_entries/${action}`        
        const token = App.apiToken
        const body = { tid: taskID }
        await defaultFetchAPIRequest(endpoint, 'POST', token!, body)
    }
}

export const tasksService = new TasksService();