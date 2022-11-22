import PropTypes from 'prop-types';
import css from './Statistics.module.css';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = (
    {title, stats}
) =>
{
    return (
        <section className={css.statistics}>
            {title !== undefined && (
              <h2 className={css.title}>Upload stats</h2>
            )}   
            <ul className={css["stats-list"]}>
                {stats.map(({ id, label, percentage }) => (
            
              <li  key={id}  className={css.item}
              style={{    
                 backgroundColor: getRandomHexColor(),
              }}
               >
                  <span className={css.label}>{label}</span>
                  <span className={css.percentage}>{percentage}%</span>
            </li>  
            ))}
            </ul>
        </section>
    );
 };
    

Statistics.propTypes = {
     title: PropTypes.string.isRequired,
     stats: PropTypes.arrayOf(
      PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired, 
      }),
    ),
}
  
