import letMeAskThumbnail from '../../public/images/letMeAskApp.png'
import pomodoroThumbnail from '../../public/images/pomodoroApp.png'
import todoThumbnail from '../../public/images/todoApp.png'
import grapesFinancesThumbnail from '../../public/images/grapesFinacesApp.png'

const works = [
  {
    id: 'letmeask',
    title: 'letmeask',
    thumbnail: letMeAskThumbnail.src,
    description: 'App developed for streamers to better organize their viewers questions.'
  },

  {
    id: 'pomodoro',
    title: 'Pomodoro',
    thumbnail: pomodoroThumbnail.src,
    description: 'A pomodoro timer.'
  },
   
  {
    id: 'todo',
    title: 'Todo',
    thumbnail: todoThumbnail.src,
    description: 'To do app to organizing your day more efficiently.'    
  },
   
  {
    id: 'grapesfinances',
    title: 'Grapes Finances',
    thumbnail: grapesFinancesThumbnail.src,
    description: 'App created to organize and control your incomes and outcomes'
  },
]

export default works