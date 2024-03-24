class EventSystem{
    static listeners = []
    static registerListener(listener){
        EventSystem.listeners.push(listener)
    }
    static eatEvent(event){
        for(let listener of EventSystem.listeners){
            if(listener.handleEvent){
                listener.handleEvent(event)
            }
        }
    }
}

window.EventSystem = EventSystem
export default EventSystem