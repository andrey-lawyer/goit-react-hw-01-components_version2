import PropTypes from 'prop-types';
import {
  PersentageStat,
  LabelStat,
  ItemStat,
  ListStat,
  TitleStat,
  SectionStat,
} from './Statistic.styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStat>
      {title && <TitleStat>Upload stats</TitleStat>}
      <ListStat>
        {stats.map(({ id, label, percentage }) => (
          <ItemStat key={id}>
            <LabelStat>{label}</LabelStat>
            <PersentageStat>{percentage}%</PersentageStat>
          </ItemStat>
        ))}
      </ListStat>
    </SectionStat>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
