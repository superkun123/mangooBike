// var d;
// $(document).ready(function () {
    //var user = '<?//=$data['inst']; ?>//';
    // var i_user = 'instagram';
    // var data = '';
    // $.get('https://www.instagram.com/'+i_user+'/?__a=1', function(response) {
    //     response = JSON.parse(data);
    // })
    // var d = [], i = 0;
    // for ($data in data['graphql']['user']['edge_owner_to_timeline_media']['edges']) {
    //     var item = [
    //         [
    //             'image',
    //             $data[i]['node']['thumbnail_src'],
    //         ],
    //         [
    //             'text',
    //             $data[i]['node']['edge_media_to_caption']['edges']['0']['node']['text']
    //         ]
    //     ];
    //
    //     d.push(item);
    //     i++;
    // }

    // d = data
    // console.log(data);


// });

var arrInst = [];
$(document).ready(function () {
    // Получение фоток из инстаграма
    let instData = '';
    var instPhotos, i_user = $('#inst_user').text();

    $.get( "https://www.instagram.com/"+i_user+"/?__a=1", function( data ) {
        instData = data
    }).done(function () {
        console.log('success');
        instPhotos = getInstPhotos(instData);
        // console.log(instPhotos);
        loadInstToPage(instPhotos);

        // arrInst = instPhotos;
    });
});


function getInstPhotos(instData) {
    let instPhotos = [];
    let photos = instData.graphql.user.edge_owner_to_timeline_media.edges;
    photos.forEach(photo => {
        let item = [];
        item['image'] = photo['node']['display_url'];
        var text = photo['node']['edge_media_to_caption']['edges']['0']['node']['text'];
        console.log(text.length);
        if (text.length > 275) {text = text.substr(0, 275); text+= '...'; }
        item['text'] = text;
        instPhotos.push(item);
    });

    return instPhotos;
}

function loadInstToPage(data) {

    var counter = 0, delay = 0.3;
    data.forEach(ph => {
        if (counter < 6) {

            i_class = '';
            i_delay = '';
            if (counter > 0) {
                i_class = ' wow fadeInUp';
                i_delay = delay;
                delay += 0.2;
            }


            $('.instDesktop, .instMobile').append('' +
                '<div href="https://instagram.com/' + $('#inst_user').text() + '" class="our-instagram__img ' + i_class + '" ' + i_delay + '>' +
                '    <img src="' + ph.image + '" alt="Картинка из инстаграма 1">\n' +
                '    <div class="our-instagram__mask">\n' +
                '        <p>' + ph.text + '</p>' +
                // '        <p>#маршруты #кикшеринг #электросамокаты #петербург</p>\n' +
                '        <a href="https://instagram.com/' + $('#inst_user').text() + '">Перейти</a>\n' +
                '    </div>\n' +
                '</div>');

        }

        counter++;
    })

}