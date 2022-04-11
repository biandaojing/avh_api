# coding: utf-8

"""
    Arm API

    REST API to manage your virtual devices.  # noqa: E501

    The version of the OpenAPI document: 1
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest
import datetime

import AvhClientAsync
from AvhClientAsync.models.project import Project  # noqa: E501
from AvhClientAsync.rest import ApiException

class TestProject(unittest.TestCase):
    """Project unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def make_instance(self, include_optional):
        """Test Project
            include_option is a boolean, when False only required
            params are included, when True both required and
            optional params are included """
        # model = AvhClientAsync.models.project.Project()  # noqa: E501
        if include_optional :
            return Project(
                id = '', 
                name = '', 
                settings = AvhClientAsync.models.project_settings.ProjectSettings(
                    version = 1.337, 
                    internet_access = True, 
                    dhcp = True, ), 
                quotas = AvhClientAsync.models.project_quota.ProjectQuota(
                    cores = 1.337, 
                    instances = 1.337, 
                    ram = 1.337, ), 
                quotas_used = AvhClientAsync.models.project_usage.ProjectUsage(
                    cores = 1.337, 
                    instances = 1.337, 
                    ram = 1.337, 
                    gpu = 1.337, )
            )
        else :
            return Project(
                id = '',
        )

    def testProject(self):
        """Test Project"""
        inst_req_only = self.make_instance(include_optional=False)
        inst_req_and_optional = self.make_instance(include_optional=True)

if __name__ == '__main__':
    unittest.main()
