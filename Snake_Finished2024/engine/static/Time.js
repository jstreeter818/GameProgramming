class Time{
    static ms = 20
    static fps = 1000 / Time.ms
    static deltaTime = Time.ms/100
    static time = 0
    static update(ctx){
        Time.time += Time.deltaTime
    }
}

window.Time = Time