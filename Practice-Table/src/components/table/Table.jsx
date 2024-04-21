import PropTypes from 'prop-types';

const Table = ({companies}) => {
  return (
      <table>
        {
          companies.map(company => (
            <tbody key={company.brand}>
              <tr>
                <td>{company.brand}</td> 
                <td>{company.income}</td>
              </tr>
            </tbody>
          ))
        }
      </table>
  )
}

Table.propTypes = {
    companies: PropTypes.array,
};

export default Table;