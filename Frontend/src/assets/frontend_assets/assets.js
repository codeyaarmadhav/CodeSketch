import logo from './logo.png';
import search_icon from './search_icon.png';
import profile_icon from './profile_icon.png';
import menu_icon from './menu_icon.png';
import dropdown_icon from './dropdown_icon.png';
import newlogo from './newlogo.png';



import usecase from './usecase.png';
import classd from './class.png';
import sequence from './sequence.png';
import activity from './activity.png';
import component from './component.png';

export const assets = {
    logo, search_icon, profile_icon, menu_icon, dropdown_icon, activity, newlogo
}

export const create = [
    {
        id: 'usecase',
        title: 'Use Case Diagram',
        description: 'Create a use case for your project',
        image: usecase,
    },
    {
        id: 'class',
        title: 'Class Diagram',
        description: 'Create a class for your project',
        image: classd,
    },
    {
        id: 'activity',
        title: 'Activity Diagram',
        description: 'Create a Activity for your project',
        image: activity,
    },
    {
        id: 'sequence',
        title: 'Sequence Diagram',
        description: 'Create a Sequence for your project',
        image: sequence,
    },
    {
        id: 'component',
        title: 'Component Diagram',
        description: 'Create a Component for your project',
        image: component,
    }
]