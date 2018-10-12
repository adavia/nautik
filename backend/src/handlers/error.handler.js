export default (err, req, res, next) => {
  if (err) {
    const validationErrors = {};
    switch (err.name) {
      case 'ValidationError':
        for (let field in err.errors) {
          validationErrors[field] = err.errors[field].message;
        }
        res.status(422).send({ error: validationErrors });
        break;
      default:
        console.log(err)
        res.status(500).send({ error: 'Something went wrong!' });
    }
  }
}