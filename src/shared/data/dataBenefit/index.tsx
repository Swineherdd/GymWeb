import { BenefitType } from "@/shared/types"
import 
{ 
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
 } from '@heroicons/react/24/solid';

export const DATA_BENEFIT: Array<BenefitType> =
[
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: 'Benefits 1',
        description: 'Description 1',
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: 'Benefits 2',
        description: 'Description 1',
    },
     {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: 'Benefits 3',
        description: 'Description 3',
    },
]   