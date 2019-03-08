import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  FOLDER = 'project2/';

  uploadfile(file) {

    const bucket = new S3(
      {
        accessKeyId: 'AKIAJWP6PLBJ2RWYQ3VQ',
        secretAccessKey: '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',
        region: 'us-east-2'
      }
    );

    const params = {
      Bucket: 'project1image',
      Key: this.FOLDER + file.name,
      Body: file
    };

    bucket.upload(params, (err, data) => {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }

      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

}
