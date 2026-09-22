const fs = require('fs'); 
 
fs.writeFile( 
    'sample.txt', 
    'Welcome to Full Stack Development', 
    (err) => { 
        if (err) { 
            console.log('Error creating file:', err); 
            return; 
        } 
 
        console.log('File created successfully!'); 
 
        fs.readFile('sample.txt', 'utf8', (err, data) => { 
            if (err) { 
                console.log('Error reading file:', err); 
                return; 
            } 
 
            console.log('File content:', data); 
 
            fs.appendFile( 
                'sample.txt', 
                '\nThis is appended text.', 
                (err) => { 
                    if (err) { 
                        console.log('Error appending file:', err); 
                        return; 
                    } 
 
                    console.log('Data appended successfully!'); 
 
                    fs.readFile('sample.txt', 'utf8', (err, data) => { 
                        if (err) { 
                            console.log('Error reading file:', err); 
                            return; 
                        } 
 
                        console.log('Updated file content:', data); 
                    }); 
                } 
            ); 
        }); 
    } 
);
fs.unlink('example2.txt', (err) => {
    if (err) {
        console.error('Error deleting file', err);
    } else {
        console.log('File deleted successfully');
    }
});