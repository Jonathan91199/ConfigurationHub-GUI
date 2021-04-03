import Axios from 'axios'
import { NotificationManager } from 'react-notifications'
import PullSystemById from './PullSystemById'

export default function deleteMicroService(id, that) {
    Axios.delete(`http://${window.location.hostname}:51241/api/Microservices/${id}`, {
        headers: {
            "accept": "*/*",
            "Authorization": `Bearer ${that.props.userConnectedInfo.token}`,
        }
    })
        .then(() => {
            NotificationManager.success('Success !', '', 3000)
            PullSystemById(that.props.system.id, that, () => that.forceUpdate)
        })
        .catch(err => {
            console.error(err)
            NotificationManager.error('Error Deleting MicroService', '', 3000)
            that.forceUpdate()

        })
}