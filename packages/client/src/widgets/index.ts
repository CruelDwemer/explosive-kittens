// Сюда импортируем\экспортируем виджеты проекта (объединение фич + ui-сущностей,
// Например: блок с кнопкой "создать" (это ui-элемент сущности) +
// диалоговое окно создания лобби (это фича-действие), которое вызывается по клику на кнопку)
// export {CreateLobbyBlock} from './create-lobby-block'

import AddPlayer from './add-player/add-player'
import { default as LeaderBoardTable } from './leader-board-table'

export { AddPlayer, LeaderBoardTable }
