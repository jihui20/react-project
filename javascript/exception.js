function doException() {
  throw new Error('오류야~~');
}

function noException() {
  return true;
}

function main() {
  try {
    // doException();
    noException();
  } catch (e) {
    console.log(e);
  } finally {
    console.log('done');
  }
}

main();
