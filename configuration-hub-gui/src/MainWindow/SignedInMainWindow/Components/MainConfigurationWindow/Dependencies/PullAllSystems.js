import Axios from 'axios'
import { setAllSystems, setSystemState } from '../../../../../Actions/MainReducerAction'
import { NotificationManager } from 'react-notifications'

export default function pullAllSystems(that, skip, take) {
    Axios.get(`http://localhost:51241/api/Systems?skip=${skip}&take=${take}`, {
        headers: {
            "accept": "text/plain",
            "Authorization": `Bearer ${that.props.userConnectedInfo.token}`
        }
    }).then(res => {
        that.props.dispatch(setAllSystems({ value: res.data }))
        res.data.length === 0 ? that.props.dispatch(setSystemState({ value: "NoSystemCard" })) : that.props.dispatch(setSystemState({ value: "ChooseSystem" }))

    }).catch(err => {
            NotificationManager.error(err.message, 'Error')
        })
}