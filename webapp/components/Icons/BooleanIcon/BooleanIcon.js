import BaseIcon from '@/components/Icons/BaseIcon/BaseIcon';
import PropTypes from 'prop-types';

const BooleanIcons = {
  "privacy": { type: "img", values: { "Public": "/privaterepo/public.png", "Private": "/privaterepo/private.png" } },
  "truth": { type: "text", values: { "True": `✅`, "False": "❌" } },
}

export default function BooleanIcon({ topic, value }) {
  return (
    <BaseIcon
      type={BooleanIcons[topic]["type"]}
      {
      ...BooleanIcons[topic]["type"] === "img" ?
          { src: BooleanIcons[topic]["values"][value] } :
          { text: BooleanIcons[topic]["values"][value] }
      }
    />
  );
}

BooleanIcon.propTypes = {
  /** mapping from which extract key-value pairs */
  topic: PropTypes.oneOf(Object.keys(BooleanIcons)).isRequired,
  /** value of the key */
  value: PropTypes.string.isRequired,
};