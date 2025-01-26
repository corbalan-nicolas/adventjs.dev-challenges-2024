function fixPackages(packages) {

    while(packages.lastIndexOf('(') !== -1) {
        const openIndex = packages.lastIndexOf('(');
        const closeIndex = packages.indexOf(')', openIndex);
        const word = packages.slice(openIndex + 1, closeIndex);
        const reversed = word.split('').reverse().join('');
        
        packages = packages.replace(`(${word})`, reversed);

    }

    return packages
}