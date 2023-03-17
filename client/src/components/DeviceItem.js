import Card from "react-bootstrap/esm/Card";
import Image from "react-bootstrap/esm/Image";
// импорт картинки
import star from "../assets/star.png"

// передаеем элемент чтобы принять его из DeviceList
const DeviceItem = ({device}) => {
    return (
        // будет возвращать 3 столбца
            <Card style={{width: 220, cursor: 'pointer'}} border={"light"}>
                {/* вставляем картинку из json базы */}
                <Image width={220} height={150} src={device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        {/* вставляем рейтинг из БД */}
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
    )
}
export default DeviceItem;

