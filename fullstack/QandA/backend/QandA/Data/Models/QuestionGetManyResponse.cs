﻿using System;
namespace QandA.Data.Models
{
    public class QuestionGetManyResponse
    {
        public int QuestionId { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string UserName { get; set; }
        public DateTime Created { get; set; }

        public QuestionGetManyResponse()
        {
        }
    }
}
