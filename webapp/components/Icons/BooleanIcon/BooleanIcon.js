import BaseIcon from '@/components/Icons/BaseIcon/BaseIcon';

const BooleanIcons = {
    "privacy" : { type : "img", values : {"Public" : "/privaterepo/public.png", "Private" : "/privaterepo/private.png" }},
    "truth" : { type : "text", values : {"True" : "&#x2705", "False" : "U+274C" }},
}

export default function BooleanIcon({ topic, value }) {
  return <BaseIcon type={BooleanIcons[topic]["type"]} src={BooleanIcons[topic]["values"][value]}/>;
}