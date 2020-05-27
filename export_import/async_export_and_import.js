async function loaded() {
    const first = await import('./examples_exports/async_import/first.js');
    const second = await import('./examples_exports/async_import/second.js');
    console.log(first.first_export());
    console.log(second.second_export());
}
loaded();