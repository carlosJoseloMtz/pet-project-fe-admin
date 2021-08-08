import './_responsive-container.scss';

const ResponsiveContainer = ({ children }) => {
  return <div className="responsive-container">
    {children}
  </div>;
}

export default ResponsiveContainer;