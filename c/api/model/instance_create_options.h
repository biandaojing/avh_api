/*
 * instance_create_options.h
 *
 * 
 */

#ifndef _instance_create_options_H_
#define _instance_create_options_H_

#include <string.h>
#include "../external/cJSON.h"
#include "../include/list.h"
#include "../include/keyValuePair.h"
#include "../include/binary.h"

typedef struct instance_create_options_t instance_create_options_t;

#include "instance_boot_options.h"
#include "model.h"
#include "volume_options.h"



typedef struct instance_create_options_t {
    char *name; // string
    char *key; // string
    char *flavor; // string
    char *project; // string
    char *os; // string
    char *osbuild; // string
    list_t *patches; //primitive container
    char *ipsw; // string
    char *ipsw_sha1; // string
    char *ipsw_md5; // string
    char *orig_ipsw_url; // string
    int encrypt; //boolean
    char *override_wifi_mac; // string
    struct volume_options_t *volume; //model
    char *snapshot; // string
    struct instance_boot_options_t *boot_options; //model
    struct model_t *device; //model

} instance_create_options_t;

instance_create_options_t *instance_create_options_create(
    char *name,
    char *key,
    char *flavor,
    char *project,
    char *os,
    char *osbuild,
    list_t *patches,
    char *ipsw,
    char *ipsw_sha1,
    char *ipsw_md5,
    char *orig_ipsw_url,
    int encrypt,
    char *override_wifi_mac,
    volume_options_t *volume,
    char *snapshot,
    instance_boot_options_t *boot_options,
    model_t *device
);

void instance_create_options_free(instance_create_options_t *instance_create_options);

instance_create_options_t *instance_create_options_parseFromJSON(cJSON *instance_create_optionsJSON);

cJSON *instance_create_options_convertToJSON(instance_create_options_t *instance_create_options);

#endif /* _instance_create_options_H_ */

