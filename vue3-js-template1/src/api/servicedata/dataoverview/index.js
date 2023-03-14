import request from '@/utils/request';

///admin/product/getCategory1   get
export const getOverViewlList = ()=>request({url:'/mymodel/dataservice/overview/{page}/{limit}',method:'get'});

export const addDataList = (LabelInfo) => {
    //携带的参数带有id----修改spu
    if (LabelInfo.id) {
        return request({ url: '/mymodel/dataservice/overview/add', method: 'post', data: LabelInfo });
    } else {
        //携带的参数不带id---添加SPU
        return request({ url: '/mymodel/dataservice/overview/add', method: 'post', data: LabelInfo });
    }
}

export const getImgList = ()=>request({url:'/mymodel/dataservice/overview/{imgId}',method:'get'});

export const establish = (LabelInfo) => {
    //携带的参数带有id----修改spu
    if (LabelInfo.id) {
        return request({ url: '/mymodel/dataservice/overview/importImage', method: 'post', data: LabelInfo });
    } else {
        //携带的参数不带id---添加SPU
        return request({ url: '/mymodel/dataservice/overview/importImage', method: 'post', data: LabelInfo });
    }
}