mongoose.connect('mongodb://localhost:27017/caso2')

//Tuyasmart
const tuyasmart = mongoose.model('tuyasmart',
{
    name: String,
    longitude: Number,
    latitude: Number,
    rooms: [
        {
            roomName: String,
            devices: [
                {
                    deviceName: String,
                    imageURL : String,
                    active : Boolean,
                    battery : Number,
                    features : [
                        {
                            name: String,
                            type: String,
                            enabled: String,
                            iconURL: String,
                        }
                    ]
                }
            ]
        }
    ]
});
