var placeholder = '%luckperms_group_expiry_time_pravitel%';
var a = '';

function place() {
    if (placeholder != ' ') {
        return placeholder.replace('d', 'д.') + placeholder.replace('h', a) + placeholder.replace('s', a);
    }
    else {
        return '0';
    }

}

place();