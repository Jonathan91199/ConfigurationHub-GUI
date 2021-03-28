import Axios from 'axios'
import { NotificationManager } from 'react-notifications'
import pullAllSystems from '../../../Dependencies/PullAllSystems'

export default function deleteSystem(id, that, callBack) {
    Axios.delete(`http://${window.location.hostname}:51241/api/Systems/${id}`, {
        headers: {
            "accept": "*/*",
            "Authorization": `Bearer ${that.props.userConnectedInfo.token}`,
        }
    })
        .then(() => {
            NotificationManager.success('System Deleted !', '', 3000)
            pullAllSystems(that, 0, 15, ()=> {
                callBack()

            })
        })
        .catch(err => {
            NotificationManager.error('Error Deleting System', '', 3000)
            console.error(err)
        })
}