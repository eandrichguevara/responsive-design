var lastStyle = 0;
const styles = [
    './styles/style-amico.css',
    './styles/style-bro.css',
    './styles/style-cuate.css',
    './styles/style-pana.css',
    './styles/style-rafiki.css'
];

var head = document.getElementsByTagName('HEAD')[0]; 

var link = document.createElement('link');

link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = styles[lastStyle]; 

head.appendChild(link);

function changeStyle(){
    lastStyle++;
    if (lastStyle >= styles.length) {
        lastStyle=0;
    }
    link.href = styles[lastStyle];
}